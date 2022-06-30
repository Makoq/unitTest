class SingleInstance
{
    private static instance:SingleInstance
    gift:string
    constructor(instanceGift:string)
    {
        this.gift=instanceGift
    }

    public static getInstance()
    {
        if (!SingleInstance.instance)
        {
            SingleInstance.instance = new SingleInstance("math")
            
        }
        return SingleInstance.instance
    }
}

export default SingleInstance