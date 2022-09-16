export interface IStat {
	name: string;
	badge?: string;
}

export interface IGradedStat extends IStat {
	level: number;
}

export interface IStatsState {
	selectedStats: IStat[];
	statPointsAvailable: number;
	gradedStats: IGradedStat[];
	totalStatPoints: number;
}
