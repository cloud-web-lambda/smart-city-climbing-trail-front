import { Link } from "@tanstack/react-router";

import { imageMountain } from "@/shared/ui/assets/images";
import { Button, Input } from "@/shared/ui/components";
import { DvhMinHeightLayout } from "@/shared/ui/Layout";

import styles from "./signInPage.module.scss";

const SignInPage: React.FC = () => {
	return (
		<main>
			<DvhMinHeightLayout minHeight="100dvh" className={styles.wrapper}>
				<img src={imageMountain} alt="산" className={styles.mountain} />
				<h1 className={styles.title}>등산로 추천 서비스</h1>
				<h2 className={styles.text}>로그인</h2>
				<form onSubmit={(e) => e.preventDefault()} className={styles.form}>
					<Input required size="medium" label="이메일" className={styles.input} placeholder="이메일을 입력하세요" />
					<Input required size="medium" label="비밀번호" className={styles.input} placeholder="비밀번호를 입력하세요" />
					<Button type="submit" buttonType="primary" full className={styles.loginButton}>
						로그인
					</Button>
					<Link className={styles.signUpLink} to="/auth/sign-up">
						<Button buttonType="tertiary" className={styles.signUpLink} type="button">
							회원가입 하러 가기
						</Button>
					</Link>
				</form>
			</DvhMinHeightLayout>
		</main>
	);
};

export default SignInPage;
