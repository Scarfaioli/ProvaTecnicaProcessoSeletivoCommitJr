import SimpleDate from "../interfaces/SimpleDate";
import SpacePoint from "../interfaces/SpacePoint";
import { TimeMachine } from "../entities/TimeMachine";
import calculateSpaceTime from "./CalculateSpaceTime";

const synchronizePulsars = (timeMachine: TimeMachine) => {

    /**
     * CALC
     */
    const spaceTime = calculateSpaceTime(timeMachine);

    const syncPulsars = Math.sqrt((timeMachine.currentPosition.x ** 2) + (timeMachine.currentPosition.y ** 2) + ((timeMachine.currentPosition.z ** 2) / spaceTime));
    return syncPulsars;
}

export default synchronizePulsars;
