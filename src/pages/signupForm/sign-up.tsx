import { useGlobalStore } from "../../global/store";
import { ISignUpData, ISignUpErrorData, ISignUpStore } from "./interface";
import { useSignUpStore } from "./store"

const SignUp = () => {
    const { setToasterData } = useGlobalStore();

    const setData = useSignUpStore((state: ISignUpStore) => state.setData);
    const data = useSignUpStore((state: ISignUpStore) => state.data)
    const { clearData } = useSignUpStore();


    // the signup error store
    const { errorData, setSignUpErrorData } = useSignUpStore();

    function validateForm(data: ISignUpData) {
        const error: ISignUpErrorData = {} as ISignUpErrorData

        if (!data.email)
            // setSignUpErrorData({ ...errorData, email: "The email cannot be empty", })
            error.email = 'The email filed is empty'
        if (!data.password)
            setSignUpErrorData({ ...errorData, password: 'The password cannot be empty' })

        return error
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const validate = validateForm(data);

        if (Object.keys(validate).length > 0) {
            alert(`The form was not filled correctly.`);
            return;
        }
        setToasterData({ open: true, message: "Signed up successfully", severity: "success" });
        clearData();
    }

    return (
        <div className="flex flex-col items-center justify-center bg-black text-white min-h-screen">
            <form onSubmit={handleSubmit} className="">
                <div className="flex flex-col text-start">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        name="email"
                        id="email"
                        value={data.email as string}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        className="p-2 border border-gray-600" placeholder="Enter your email here: " />
                </div>

                <div className="flex flex-col text-start">
                    <label htmlFor="email">Password</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                        value={data.password as string} className="p-2 border border-gray-600" placeholder="Enter your password here: " /></div>

                <button type="submit" className="border p-2 mt-5">Sign up</button>

            </form>
        </div>
    )
}

export default SignUp