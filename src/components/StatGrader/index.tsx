import React from "react";
import { GraderContainer, GradingButtons, GradingButton, Points, SkillName, SkillIcon } from "./styles";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { IGradedStat } from "@/interfaces/IStats";
import { statsActions } from "@/redux/stats";
import { resolveIcon } from "@/components/StatPanels/stat-options";
import badges from "@/components/CharacterOptions/badges";
import clsx from "clsx";
import get from "lodash-es/get";
import { Fragment } from "react";

interface IProps {
	stat: IGradedStat;
	canIncrease?: boolean;
	[key: string]: any;
}

const StatGrader = ({ stat, canIncrease = false, ...rest }: IProps) => {
	const dispatch: Dispatch = useDispatch();

	const increase = () => {
		dispatch(statsActions.addStatPoint(stat));
	};

	const decrease = () => {
		dispatch(statsActions.removeStatPoint(stat));
	};

	const className = resolveIcon("");

	const getBadge = (badgeName?: string) => {
		if (badgeName) {
			const badgeLayer = get(badges, badgeName)
			if (typeof badgeLayer === "function") {
				return (<Fragment>{badgeLayer()}</Fragment>)
			}
		}
	}
	return (
		<GraderContainer {...rest}>
			<SkillIcon className={clsx("skill-icon", className)}>{getBadge()}</SkillIcon>
			<SkillName>{stat && stat.name}</SkillName>
			<Points>{stat && stat.level}</Points>
			<GradingButtons>
				<GradingButton className="plus" aria-label="Increase" onClick={increase} disabled={!canIncrease} />
				<GradingButton
					className="minus"
					arial-label="Decrease"
					onClick={decrease}
					disabled={stat.level === 0}
				/>
			</GradingButtons>
		</GraderContainer>
	);
};

export default StatGrader;
