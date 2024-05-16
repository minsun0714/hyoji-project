import useAuthStore from "../store/AuthStore"
import Input from "./components/Input"

const Login = () => {
	const { userId, setUserId, password, setPassword } = useAuthStore()
	return (
		<div>
			<form className="flex flex-col gap-y-4">
				<Input
					label={"아이디"}
					value={userId}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUserId(e.currentTarget.value)
					}
				/>
				<Input
					label={"비밀번호"}
					value={password}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setPassword(e.currentTarget.value)
					}
				/>
				<button className="h-12 text-white border rounded-l border-mint bg-mint">
					로그인
				</button>
			</form>
		</div>
	)
}

export default Login