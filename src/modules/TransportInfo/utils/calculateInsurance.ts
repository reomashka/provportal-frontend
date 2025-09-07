interface InsuranceInput {
	liteInsurance?: number | null;
	repairWithoutInsurance: number;
	hasStand?: boolean;
	hasExc?: boolean;
}

interface InsuranceOutput {
	liteInsurance: number | null;
	standInsurance: number | null;
	excInsurance: number | null;
	repairWithoutInsurance: number;
	repairLiteInsurance: number | null;
	repairStandInsurance: number | null;
	repairExcInsurance: number | null;
}

export function calculateInsurance(input: InsuranceInput): InsuranceOutput {
	const lite = input.liteInsurance ?? null;
	const repairWithout = input.repairWithoutInsurance;

	const standInsurance = lite && input.hasStand ? Math.round(lite * 3.71428571) : null;
	const excInsurance = lite && input.hasExc ? Math.round(lite * 10) : null;

	const repairLite = lite ? Math.round(repairWithout * 0.7) : null;
	const repairStand = lite && input.hasStand ? Math.round(repairWithout * 0.55) : null;
	const repairExc = lite && input.hasExc ? Math.round(repairWithout * 0.35) : null;

	return {
		liteInsurance: lite,
		standInsurance,
		excInsurance,
		repairWithoutInsurance: repairWithout,
		repairLiteInsurance: repairLite,
		repairStandInsurance: repairStand,
		repairExcInsurance: repairExc,
	};
}
