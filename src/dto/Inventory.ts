class Inventory {
    private name: string;
    private totalCount: number;
    private availableCount: number;

    constructor(name: string, totalCount: number, availableCount: number) {
        this.name = name;
        this.totalCount = totalCount;
        this.availableCount = availableCount;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getTotalCount() {
        return this.totalCount;
    }

    public setTotalCount(totalCount: number) {
        this.totalCount = totalCount;
    }

    public getAvailableCount() {
        return this.availableCount;
    }

    public setAvailableCount(availableCount: number) {
        this.availableCount = availableCount;
    }
}

export default Inventory;