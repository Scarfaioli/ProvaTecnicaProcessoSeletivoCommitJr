import SimpleDate from "../interfaces/SimpleDate";
import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateSpaceTime = (timeMachine: TimeMachine) => {
    /**
     * CALC
     */
    const timeBalance = calculateTimeBalance(timeMachine);

    const spaceTime = Math.sqrt((timeBalance.year ** 2) + (timeBalance.month ** 2) + (timeBalance.day ** 2));

    return spaceTime;
}

export default calculateSpaceTime;
