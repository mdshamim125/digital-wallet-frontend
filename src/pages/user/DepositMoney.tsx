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
import { useAddMoneyByUserMutation } from "@/redux/features/transaction/transaction.api";
import { toast } from "sonner";

const FormSchema = z.object({
  amount: z
    .number({ message: "Amount must be a number" })
    .positive("Amount must be greater than 0"),
  account: z.string().nonempty("Please select an account"),
});

export function DepositMoney() {
  const [addMoney] = useAddMoneyByUserMutation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: 0,
      account: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    // console.log("Deposit Data:", data);
    const depositData = {
      amount: data.amount,
      id: data.account,
    };
    try {
      const response = await addMoney(depositData).unwrap();
      console.log("Deposit successful:", response);
      toast.success("Deposit successful");
      form.reset();
    } catch (error) {
      console.error("Deposit failed:", error);
      toast.error((error as { data?: { message?: string } })?.data?.message || "Deposit failed");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle>Deposit money (via agent cash-in simulation)</CardTitle>
        <CardDescription>
          Enter the amount and select an account to deposit
        </CardDescription>
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
              Deposit
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
