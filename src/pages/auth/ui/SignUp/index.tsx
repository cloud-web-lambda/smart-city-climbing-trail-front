import { type MouseEventHandler, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { type SubmitHandler, useForm } from "react-hook-form";

import VerificationCode from "@/pages/auth/ui/SignUp/VerificationCode";

import { useSignUpMutation } from "@/features/auth";

import { signUpSchema, type SignUpSchema } from "@/entities/auth/model";

import { imageMountain } from "@/shared/ui/assets/images";
import { Button, Input } from "@/shared/ui/components";
import { DvhMinHeightLayout } from "@/shared/ui/Layout";

import styles from "./signUpPage.module.scss";

const SignUpPage: React.FC = () => {
	const [sub, setSub] = useState("");

	const {
		register,
		handleSubmit,
		setValue,
		formState: { isSubmitting, errors, disabled, isSubmitSuccessful },
	} = useForm<SignUpSchema>({
		resolver: zodResolver(signUpSchema),
		mode: "onChange",
	});

	const { mutateAsync: signUp } = useSignUpMutation();

	const onClickClear: MouseEventHandler<HTMLButtonElement> = (e) => {
		const name = e.currentTarget.name as keyof SignUpSchema;
		setValue(name, "", { shouldValidate: true });
	};

	const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
		if (disabled) return;
		const { sub } = await signUp(data);
		setSub(sub);
	};

	return (
		<main>
			<DvhMinHeightLayout minHeight="100dvh" className={styles.wrapper}>
				<img src={imageMountain} alt="산" className={styles.mountain} />
				<h1 className={styles.title}>등산로 추천 서비스</h1>
				<h2 className={styles.text}>회원가입</h2>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<Input
						required
						size="medium"
						label="이메일"
						className={styles.input}
						placeholder="이메일을 입력하세요"
						errorMessage={errors.email?.message}
						type="email"
						inputMode="email"
						onClickClear={onClickClear}
						disabled={isSubmitting || isSubmitSuccessful}
						autoComplete="email"
						{...register("email")}
					/>
					<Input
						required
						size="medium"
						label="비밀번호"
						className={styles.input}
						placeholder="비밀번호를 입력하세요"
						errorMessage={errors.password?.message}
						type="password"
						onClickClear={onClickClear}
						disabled={isSubmitting || isSubmitSuccessful}
						autoComplete="new-password"
						{...register("password")}
					/>
					{!sub && (
						<Button type="submit" buttonType="primary" full className={styles.signUpButton} disabled={isSubmitting}>
							회원가입
						</Button>
					)}
				</form>
				{sub && <VerificationCode sub={sub} />}
				<Link to="/auth" className={styles.link}>
					<Button buttonType="tertiary" type="button">
						로그인 하러 가기
					</Button>
				</Link>
			</DvhMinHeightLayout>
		</main>
	);
};

export default SignUpPage;
