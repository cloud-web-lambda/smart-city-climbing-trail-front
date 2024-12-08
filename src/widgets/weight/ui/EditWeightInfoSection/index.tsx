import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";

import { useSaveMyWeightMutation } from "@/features/users/api/mutations";
import { useGetMyWeightSuspenseQuery } from "@/features/users/api/queries";

import { updateWeightSchema, UpdateWeightSchema } from "@/entities/users/model";

import { Button, Input } from "@/shared/ui/components";

import styles from "./editWeightInfoSection.module.scss";

const EditWeightInfoSection: React.FC = () => {
	const { data } = useGetMyWeightSuspenseQuery();
	const {
		register,
		handleSubmit,
		setValue,
		formState: { isSubmitting, errors },
	} = useForm<UpdateWeightSchema>({
		resolver: zodResolver(updateWeightSchema),
		mode: "onTouched",
		defaultValues: {
			weight: data.weight?.toString() || undefined,
		},
	});

	const onClickClear = () => {
		setValue("weight", "0", { shouldValidate: true });
	};

	const { mutateAsync: saveMyWeight } = useSaveMyWeightMutation();

	const onSubmit: SubmitHandler<UpdateWeightSchema> = async (data) => {
		await saveMyWeight({ weight: data.weight.toString() });
	};

	return (
		<section className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.title}>몸무게</h2>
				<Input
					size="medium"
					placeholder="몸무게를 입력하세요"
					errorMessage={errors.weight?.message}
					disabled={isSubmitting}
					onClickClear={onClickClear}
					{...register("weight")}
				/>
				<Button type="submit" buttonType="tertiary" className={styles.editButton} disabled={isSubmitting}>
					적용
				</Button>
			</form>
		</section>
	);
};

export default EditWeightInfoSection;

export const LoadingEditWeightInfoSection: React.FC = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>몸무게</h2>
			<Skeleton width={32} height={24} />
		</section>
	);
};
