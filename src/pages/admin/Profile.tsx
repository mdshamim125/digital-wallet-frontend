/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
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

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpdateProfileMutation } from "@/redux/features/user/user.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." })
    .optional()
    .or(z.literal("")), // allow empty
  email: z.string().email({ message: "Invalid email address." }).optional(),
  phone: z
    .string()
    .min(10, { message: "Phone number must be valid." })
    .optional()
    .or(z.literal("")),
  oldPassword: z.string().optional(),
  password: z.string().optional(),
});

export default function Profile() {
  const { data: profileInfo, refetch } = useUserInfoQuery(null);
  const [updateProfile] = useUpdateProfileMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      oldPassword: "",
      password: "",
    },
  });

  // Reset form values when profileInfo is loaded
  useEffect(() => {
    if (profileInfo?.data) {
      form.reset({
        name: profileInfo.data.name,
        email: profileInfo.data.email,
        phone: profileInfo.data.phone,
        oldPassword: "",
        password: "",
      });
    }
  }, [profileInfo, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Prepare payload with only filled fields
    const payload: Partial<typeof values> = {};

    Object.keys(values).forEach((key) => {
      const value = values[key as keyof typeof values];
      if (value && value.trim() !== "") {
        // Only send oldPassword if password is being changed
        if (key === "oldPassword" && !values.password) return;
        payload[key as keyof typeof values] = value;
      }
    });

    try {
      const result = await updateProfile(payload).unwrap();
      console.log("Profile updated successfully:", result);
      toast.success("Profile updated successfully");
      refetch();
    } catch (error: any) {
      console.error("Failed to update profile:", error);
      toast.error(error?.data?.message || "Failed to update profile");
    }
  }

  return (
    <div className="w-full mt-6 md:w-1/2 mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-lg p-6 transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your name"
                    autoComplete="name"
                    className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email (disabled) */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your email"
                    autoComplete="email"
                    disabled
                    className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white cursor-not-allowed"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="+8801XXXXXXXXX"
                    autoComplete="tel"
                    className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Old Password */}
          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Old Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter new password"
                    autoComplete="old-password"
                    className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* New Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter new password"
                    autoComplete="new-password"
                    className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Actions */}
          <div className="flex justify-end space-x-3 mt-6">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Save changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
