/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SearchSelect from "@/components/search-select";
import { toast } from "sonner";
import type { useWithdrawMoneyByUserMutation } from "@/redux/features/transaction/transaction.api";

const FormSchema = z.object({
  amount: z
    .number({ message: "Amount must be a number" })
    .positive("Amount must be greater than 0"),
  account: z.string().nonempty("Please select an account"),
});

type TransactionFormProps = {
  title: string;
  description: string;
  actionLabel: string;
  // useMutationHook: () => [(data: any) => Promise<any>, { isLoading?: boolean }];
  useMutationHook: () => ReturnType<typeof useWithdrawMoneyByUserMutation>;
};

export function TransactionForm({
  title,
  description,
  actionLabel,
  useMutationHook,
}: TransactionFormProps) {
  const [mutate] = useMutationHook();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: 0,
      account: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const payload = {
      amount: data.amount,
      id: data.account,
    };

    try {
      const response = await mutate(payload).unwrap();
      console.log(`${actionLabel} successful:`, response);
      toast.success(`${actionLabel} successful`);
      form.reset();
    } catch (error) {
      console.error(`${actionLabel} failed:`, error);
      toast.error(
        (error as { data?: { message?: string } })?.data?.message ||
          `${actionLabel} failed. Please try again.`
      );
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            {/* Amount Field */}
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Account Field */}
            <FormField
              control={form.control}
              name="account"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account</FormLabel>
                  <FormControl>
                    <SearchSelect {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter className="flex mt-4 flex-col gap-2">
            <Button type="submit" className="w-full">
              {actionLabel}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
