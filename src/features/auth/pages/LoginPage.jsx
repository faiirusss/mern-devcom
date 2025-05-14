import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PageContainer } from "../../../components/layouts/PageContainer";
import { SectionContainer } from "../../../components/layouts/SectionContainer";
import { Card, CardContent, CardFooter, CardHeader } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { RegisterFormInner } from "../components/RegisterFormInner";
import { Form}  from "../../../components/ui/form"
import { registerFormSchema } from "../forms/register";
import { getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { emailStorageAtom, tokenAtom, usernameStorage } from "../../../jotai/atoms";
import { useAtom } from "jotai";
import { apiInstanExpress } from "../../../utils/apiInstance";
import { toast } from "sonner";


const LoginPage =  () => {
    const navigate = useNavigate()

    const [, setToken] = useAtom(tokenAtom)
    const [, setEmailStorage] = useAtom(emailStorageAtom)
    const [, setUsername] = useAtom(usernameStorage)

    const form = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const handleLoginSubmit = async (values) => {
      try {
        const {email, password} = values
        const login = await signInWithEmailAndPassword(auth, email, password);
        const firebaseToken = await getIdToken(login.user);

        const addToken = await apiInstanExpress.post("/login", {email, password, token: firebaseToken })              

        if(addToken.status === 200) {
          setToken(firebaseToken)
          setEmailStorage(login.user.email)
          setUsername(addToken.data.data)
          toast.success("Login Success!", {
            position: "top-right"
          });
          
          setTimeout(() =>{
            navigate("/");
          }, 1000)
        }
    
      } catch (error) {
        toast.error(`Login Failed: ${error.code}`, {
          position: "top-right"
        });
      }
    };
    return (
          <PageContainer withHeader={false} withFooter={false}>
            <SectionContainer
              padded
              className="flex min-h-[calc(100vh-144px)] w-full flex-col justify-center mx-auto"
            >
              <Card className="w-full max-w-[480px] self-center border-none shadow-none">
                <CardHeader className="flex flex-col items-center justify-center">
                  {/* icon */}
                  <Link to={"/"}>
                    <h1 className="text-3xl font-bold text-background bg-foreground px-3 py-1 rounded-md mb-10">DEV</h1>
                  </Link>

                  <h1 className="text-2xl font-bold text-primary">
                  Join the DEV Community 👋
                  </h1>
                  <p className="text-muted-foreground text-sm">DEV Community is a community of amazing developers</p>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <RegisterFormInner
                      form={form}
                      loading={false}
                      buttonText="Sign in with email"
                      onSubmit={handleLoginSubmit}
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
                    By signing in, you are agreeing to our <Link className="font-semibold text-foreground">Terms of Service</Link> and <Link className="font-semibold text-foreground">Privacy Policy</Link>
                  </p>
                
                  <div className="w-full items-center h-[2px] border-t-2 mt-5"></div>
                  <p className="text-[15px]">
                    New to DEV Community?{" "}
                    <Link to={"/register"} className="font-bold text-purple-600">
                      Create account.
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </SectionContainer>
          </PageContainer>
      );
}

export default LoginPage