export class FeatureFlagService {

  private randomFlag = 0.5;
  constructor() { 
    this.randomFlag = Math.floor(Math.random()* 10000) + 1;
    console.log('FeatureFlagService constructor randomFlag: ' + this.randomFlag);
  }

  getFlag(): number {
    return this.randomFlag;
  }

}
