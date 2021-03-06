class RoomEUI extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "RoomEUISkin";
		this.y = Data.getscreenHeight() / 2 - this.height / 2;
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createScene,this);
		this.image.touchEnabled=true;
		this.image0.touchEnabled=true;
		this.image1.touchEnabled=true;
		this.image2.touchEnabled=true;
		this.image3.touchEnabled=true;
		this.image4.touchEnabled=true;
		this.image5.touchEnabled=true;
		this.image6.touchEnabled=true;
		this.image7.touchEnabled=true;

	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		
	}

	public buttonL: eui.Button;
	public buttonR: eui.Button;
	public buttonFinish: eui.Button;
	public buttonXL: eui.Button;
	public buttonXR: eui.Button;
	public buttonClear: eui.Button;
	public image: eui.Button;
	public image0: eui.Button;
	public image1: eui.Button;
	public image2: eui.Button;
	public image3: eui.Button;
	public image4: eui.Button;
	public image5: eui.Button;
	public image6: eui.Button;
	public image7: eui.Button;


	private createScene() 
	{
		this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.createScene,this);
		
		let tw = egret.Tween.get(this.buttonR, { loop: true });
		tw.to({ x: this.buttonR.x + this.buttonR.width }, 500);
		let tw2 = egret.Tween.get(this.buttonL, { loop: true });
		tw2.to({ x: this.buttonL.x - this.buttonL.width }, 500);

		this.buttonR.addEventListener(egret.TouchEvent.TOUCH_END, this.Touch, this);
		this.buttonL.addEventListener(egret.TouchEvent.TOUCH_END, this.Touch, this);
	}

	private Touch() {
		if (this.x > -100) {
			let tw = egret.Tween.get(this);
			tw.to({ x: this.x - this.width / 2 }, 500);
		}
		else {
			let tw = egret.Tween.get(this);
			tw.to({ x: this.x + this.width / 2 }, 500);
		}
	}
}