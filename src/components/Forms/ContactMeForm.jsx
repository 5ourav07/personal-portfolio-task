"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function ContactMeForm() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values) => {
    if (!values.email) {
      form.setError("email", {
        type: "required",
        message: "Email is required.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      form.setError("email", {
        type: "pattern",
        message: "Invalid email address.",
      });
      return;
    }

    console.log(values);
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-[25px]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <div className="relative pb-6">
                    <FormControl>
                      <Input
                        className="h-[75px] rounded-[14px] bg-[#F8F8F8] border border-[#AFAFAF] text-[#797979] text-lg font-medium px-6"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <div className="absolute top-[80px] left-0">
                      <FormMessage />
                    </div>
                  </div>
                </FormItem>
              )}
            />
            <Button
              className="w-full sm:w-[222px] h-[75px] rounded-[14px] bg-[#FD6F00] hover:bg-[#FD6F0099] text-2xl font-semibold text-white"
              type="submit"
            >
              Contact Me
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
