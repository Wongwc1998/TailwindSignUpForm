import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

function App() {
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      phoneNumber: z.string().regex(phoneRegex, 'Invalid Number!'),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: "passwords should match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    console.log("IT WORKED", data);
  };

  return (
    <>
      <div className="grid grid-cols-3  min-h-screen">
        <div className="bg-black text-center grid grid-row-5 text-slate-200 items-end bg-unsplash bg-center bg-cover bg-no-repeat">
          <div className="row-span-2 text-7xl flex items-center justify-center bg-black bg-opacity-50 p-5">
            <img src="../public/odin-lined.png" className="h-20" />
            <p className="text-7xl">ODIN</p>
          </div>
          <div className=" row-span-3">
            <p>
              Photo by{" "}
              <a
                href="https://unsplash.com/@haliewestphoto"
                className="underline"
              >
                Halie West
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com" className="underline">
                Unsplash
              </a>
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="font-bold flex flex-col justify-center min-h-screen  bg-slate-200 text-2xl">
            <h1 className="py-4 px-2 mx-10">
              This is not a real online service! You know you need something
              like this in your life to help you realize your deepest dreams.
              Sign up <span className="italic">now </span>
              to get started.
            </h1>
            <h1 className="py-4 px-2 mx-10 mb-5">
              You <span className="italic">know</span> you want to.
            </h1>

            <form
              onSubmit={handleSubmit(submitData)}
              className="flex flex-col gap-3 min-w-full"
            >
              <div className="bg-slate-50 px-10 py-5 max-w-full shadow-xl text-base">
                <h2 className="text-xl">Let's do this!</h2>
                <div className="grid grid-cols-2 grid-rows-3 gap-x-20 gap-y-5 max-w-fit  my-5">
                  <div className="flex flex-col font-light uppercase items-start text-sm">
                    <label> First Name</label>
                    <input
                      className="border border-slate-500 rounded text-base"
                      type="text"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <span className="text-red-500">
                        {" "}
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col font-light uppercase items-start text-sm">
                    <label> Last Name</label>
                    <input
                      className="border border-slate-500 rounded text-base"
                      type="text"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <span className="text-red-500">
                        {" "}
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col font-light uppercase items-start text-sm">
                    <label> Email</label>
                    <input
                      className="border border-slate-500 rounded text-base"
                      type="email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        {" "}
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col font-light uppercase items-start text-sm">
                    <label> Phone Number </label>
                    <input
                      className="border border-slate-500 rounded text-base"
                      type="text"
                      {...register("phoneNumber")}
                    />
                    {errors.phoneNumber && (
                      <span className="text-red-500">
                        {" "}
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col font-light uppercase items-start text-sm">
                    <label> Password</label>
                    <input
                      className="border border-slate-500 rounded text-base"
                      type="password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <span className="text-red-500">
                        {" "}
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col font-light uppercase items-start text-sm">
                    <label> Confirm Password</label>
                    <input
                      className="border border-slate-500 rounded text-base"
                      type="password"
                      {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                      <span className="text-red-500">
                        {" "}
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-700 font-black mx-10 my-5 px-10 py-4 rounded text-base text-slate-100  shadow-xl max-w-fit"
              >
                Create Account
              </button>
            </form>
            <div className="text-base font-normal mx-10">
              Already have an account?{" "}
              <a href="#" className="text-green-700 font-bold">
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
