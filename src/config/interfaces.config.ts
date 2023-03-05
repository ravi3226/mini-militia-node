export enum Bullet {
    TwoTwoLR=0,
    SNW=1,
    Nine=3,
    ACP=4,
    SPL=5,
    SevenSixTwo=6,
    FiveFiveSix=7,
    TwelveGa=8,
    BMG=9
}

export enum GunType {
    AKSeven=0,
    
}

export interface Gun {
    type: GunType,
    bulletPerMagazine: number,
    takeHealthPerBullet: number,
    canHandleBySingleHand: boolean,
    bulletType: Bullet
}