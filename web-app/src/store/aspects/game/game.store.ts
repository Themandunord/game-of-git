import { getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import { IGameState } from '../../../../game/IGameState.interface';
import { IGameConfigBase } from '../../../../game/config/IGameConfig.base';
import store from '@/store';

@Module({
	dynamic: true,
	store,
	name: 'gameModule'
})
class GameState extends VuexModule implements IGameState {
	public gameConfig: IGameConfigBase = {
		title: null,
		owner: null,
		type: null
	};

	public currentLocation = { x: 0, y: 0, z: 0 };

	@Mutation
	public setLocation(currentLocation: any) {
		this.currentLocation = currentLocation;
	}

	@Mutation
	public setGameConfig(data: IGameConfigBase) {
		this.gameConfig = data;
	}
}

export default getModule(GameState);
