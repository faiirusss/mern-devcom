import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export const RegisterFormInner = ({ form, onSubmit, loading, buttonText = "Submit" }) => {
    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-1">
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem>
                <FormControl>
                <Input type="email" placeholder="email@domain.com" {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
            </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
            <FormItem>
                <FormControl>
                <Input type="password" placeholder="********" {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
            </FormItem>
            )}
        />
        <Button className="mt-2 w-full" size={"lg"} disabled={loading}>
            {loading ? "Loading..." : buttonText}
        </Button>
      </form>
    );
  };