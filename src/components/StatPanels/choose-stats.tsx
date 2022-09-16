import React, { Fragment, useRef } from "react";
import { StatsPanel, Title, OptionList, Option } from "./styles";
import { Tab,} from "@/components/TabSwitcher";
import get from "lodash-es/get";
import statOptions from "./stat-options";
import useTabIndicator from "@/hooks/use-tab-indicator";
import { useSelector, useDispatch } from "react-redux";
import { IStoreState } from "@/interfaces/IStoreState";
import { Dispatch } from "redux";
import { statsActions } from "@/redux/stats";
import Checkmark from "./checkmark";
import EvaluateArrow from "./evaluate-arrow";
import badges from "@/components/CharacterOptions/badges";
import { IStat } from "~/src/interfaces/IStats";



const ChooseStats = () => {
	const tabContainer = useRef(null);
	const tabIndicator = useRef(null);
	const { selectedStats } = useSelector((store: IStoreState) => store.stats);
	const dispatch: Dispatch = useDispatch();

	const addStat = (option: IStat) => {
		dispatch(statsActions.addStat(option));
	};

	const statsSelected = selectedStats.length === 4;

	const isOptionActive = (option: string) =>
		!!selectedStats && selectedStats.length > 0 && !!selectedStats.find(stat => !!stat && stat.name === option);

	useTabIndicator(tabContainer, tabIndicator);

	const getBadge = (badgeName?: string) => {
		if (badgeName) {
			const badgeLayer = get(badges, badgeName)
			if (typeof badgeLayer === "function") {
				return (<Fragment>{badgeLayer()}</Fragment>)
			}
		}
	}

	return (
		<StatsPanel>
			<Title>Choose 4 skills</Title>
				<OptionList className="option-list">
					{statOptions.map((option, i: number) => (
						<Option
							key={option.name + "$$" + i}
							disabled={statsSelected && !isOptionActive(option.name,)}
							selected={isOptionActive(option.name)}
							onClick={() => addStat(option)}
						>
							<div className="badge">

								{ getBadge(option.badge) }
							</div>
							<span className="check">
								<Checkmark />
							</span>
							{option.name}
						</Option>
					))}
				</OptionList>
			{statsSelected && (
				<Title as={Tab} id="distribute" className="distribute-text" style={{ marginTop: 85 }}>
					<span className="icon">
						<EvaluateArrow />
					</span>
					Next, distribute points
				</Title>
			)}
		</StatsPanel>
	);
};

export default ChooseStats;
