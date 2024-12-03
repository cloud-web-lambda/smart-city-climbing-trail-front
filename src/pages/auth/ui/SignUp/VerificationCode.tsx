import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { useConfirmCodeMutation } from "@/features/auth";

import { confirmCodeSchema, ConfirmCodeSchema } from "@/entities/auth/model";

import { Button, Input } from "@/shared/ui/components";

import styles from "./verificationCode.module.scss";

interface Props {
	sub: string;
}

const VerificationCode: React.FC<Props> = ({ sub }) => {
	const {
		setValue,
		handleSubmit,
		register,
		formState: { isSubmitting, errors, disabled },
	} = useForm<ConfirmCodeSchema>({
		resolver: zodResolver(confirmCodeSchema),
		mode: "onTouched",
	});

	const { mutateAsync: confirmCode } = useConfirmCodeMutation();

	const onSubmit: SubmitHandler<ConfirmCodeSchema> = async (data) => {
		if (disabled) return;
		await confirmCode(data);
	};

	useEffect(() => {
		if (!sub) return;
		setValue("sub", sub);
	}, [setValue, sub]);

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
			<Input
				required
				size="medium"
				label="인증코드"
				placeholder="메일로 전송 된 인증코드 6자리를 입력하세요."
				type="number"
				className={styles.input}
				disabled={isSubmitting}
				errorMessage={errors.confirmationCode?.message}
				{...register("confirmationCode")}
			/>
			<Button buttonType="primary" type="submit" className={styles.confirmButton} full disabled={isSubmitting}>
				인증하기
			</Button>
		</form>
	);
};

export default VerificationCode;
