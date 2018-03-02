
export class LoadingManager{

  private loadingStack = 0;
  private _onceWhenAllLoaded: () => void = () => {};


  public get loading(){
    return this.loadingStack != 0;
  }

  public oneLoading() {
    this.loadingStack++;
  }

  public oneLoaded() {
    this.loadingStack--;

    if(!this.loading) {
      this.onceWhenAllLoaded();
      this.onceWhenAllLoaded = (() => {});
    }
  }

  set onceWhenAllLoaded(value: () => void) {
    this._onceWhenAllLoaded = value;
  }

  get onceWhenAllLoaded(): (() => void){
    return this._onceWhenAllLoaded;
  }

}
