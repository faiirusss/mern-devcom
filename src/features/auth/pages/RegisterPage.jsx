import { PageContainer } from "../../../components/layouts/PageContainer";
import { SectionContainer } from "../../../components/layouts/SectionContainer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../components/ui/card";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Form } from "@/components/ui/form";
import { RegisterFormInner } from "../components/RegisterFormInner";
import { Button } from "../../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { registerFormSchema } from "../forms/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiInstanExpress } from "../../../utils/apiInstance";
import { toast } from "sonner";
import { nanoid } from "nanoid";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleRegisterSubmit = async (values) => {
    try {
      setLoading(true);
      const { email, password } = values;
      const username = email.split("@")[0] + "_" + nanoid(12);

      const register = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (register) {
        const newUser = await apiInstanExpress.post("register", {
          email,
          password,
          username,
        });

        if (newUser.status === 201) {
          toast.success("Account has been created!", {
            position: "top-right",
          });
          setTimeout(() => {
            form.reset();
            navigate("/login");
          }, 1000);
        }
      }
    } catch (error) {
      const message =
        error.code === "auth/email-already-in-use"
          ? "Email sudah digunakan."
          : error.message;
      toast(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer withHeader={false} withFooter={false}>
      <SectionContainer
        padded
        className="flex min-h-[calc(100vh-144px)] w-full flex-col justify-center mx-auto"
      >
        <Card className="w-full max-w-[480px] self-center border-none shadow-none">
          <CardHeader className="flex flex-col items-center justify-center mb-5">
            {/* icon */}
            <Link to={"/"}>
              <h1 className="text-3xl font-bold text-background bg-foreground px-3 py-1 rounded-md">
                DEV
              </h1>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-5">
              <h2 className="font-bold text-2xl">Join the DEV Community</h2>
              <p className="text-base">
                Enter your email to sign up for this app
              </p>
            </div>
            <Form {...form}>
              <RegisterFormInner
                form={form}
                onSubmit={handleRegisterSubmit}
                loading={loading}
                buttonText="Sign up with email"
              />
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between gap-x-4">
              <div className="h-[2px] w-full border-t-2" />
              <p className="flex-1 text-nowrap text-sm text-muted-foreground">
                or continue with
              </p>
              <div className="h-[2px] w-full border-t-2" />
            </div>

            <Button variant={"secondary"} className="w-full" size={"lg"}>
              <FcGoogle />
              Sign up with Google
            </Button>
            <p className="text-center px-6 text-sm italic text-foreground/60">
              By signing up, you are agreeing to our{" "}
              <Link className="font-semibold text-foreground">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link className="font-semibold text-foreground">
                Privacy Policy
              </Link>
            </p>
            <div className="w-full items-center h-[2px] border-t-2 mt-5"></div>
            <p className="text-[15px]">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-600 font-bold">
                Log in.
              </Link>
            </p>
          </CardFooter>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
};

export default RegisterPage;
