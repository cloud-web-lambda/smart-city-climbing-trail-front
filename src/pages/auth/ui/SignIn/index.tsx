import { MouseEventHandler } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { type SubmitHandler, useForm } from "react-hook-form";

import { useSignInMutation } from "@/features/auth/api";

import { signInSchema, SignInSchema } from "@/entities/auth/model";

import { imageMountain } from "@/shared/ui/assets/images";
import { Button, Input } from "@/shared/ui/components";
import { DvhMinHeightLayout } from "@/shared/ui/Layout";

import styles from "./signInPage.module.scss";

const SignInPage: React.FC = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { isSubmitting, errors, disabled },
	} = useForm<SignInSchema>({ resolver: zodResolver(signInSchema), mode: "onChange" });

	const { mutateAsync: signIn } = useSignInMutation();

	const onClickClear: MouseEventHandler<HTMLButtonElement> = (e) => {
		const name = e.currentTarget.name as keyof SignInSchema;
		setValue(name, "", { shouldValidate: true });
	};

	const onSubmit: SubmitHandler<SignInSchema> = async (data) => {
		if (disabled) return;
		await signIn(data);
	};

	return (
		<main>
			<DvhMinHeightLayout minHeight="100dvh" className={styles.wrapper}>
				<img src={imageMountain} alt="산" className={styles.mountain} />
				<h1 className={styles.title}>등산로 추천 서비스</h1>
				<h2 className={styles.text}>로그인</h2>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<Input
						required
						size="medium"
						label="이메일"
						className={styles.input}
						placeholder="이메일을 입력하세요"
						type="email"
						inputMode="email"
						autoComplete="email"
						disabled={isSubmitting}
						onClickClear={onClickClear}
						errorMessage={errors.email?.message}
						{...register("email")}
					/>
					<Input
						required
						size="medium"
						label="비밀번호"
						className={styles.input}
						placeholder="비밀번호를 입력하세요"
						type="password"
						autoComplete="current-password"
						disabled={isSubmitting}
						onClickClear={onClickClear}
						errorMessage={errors.password?.message}
						{...register("password")}
					/>
					<Button type="submit" buttonType="primary" full className={styles.signInButton} disabled={isSubmitting}>
						로그인
					</Button>
				</form>
				<Link to="/auth/sign-up" className={styles.link}>
					<Button buttonType="tertiary" type="button">
						회원가입 하러 가기
					</Button>
				</Link>
			</DvhMinHeightLayout>
		</main>
	);
};

export default SignInPage;
