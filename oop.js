class Computer {
    //YOUR CODE HERE
    constructor(cpu, drives) {
        this.cpu = cpu,
        this.drives = []
    }

    addStorage(newDrive) {
        this.drives.push(new Drive(newDrive.type, newDrive.maxSpace));
    }

    reformat() {
        this.drives.forEach(drive => drive.wipe());
    }
};
class Processor {
    //YOUR CODE HERE
    constructor(brand, model, power) {
        this.brand = brand,
        this.model = model,
        this.power = power
    };

    listSpecs() {
        return `The ${this.brand} ${this.model} produces ${this.power} gHz of processing power.`
    };
};
class Drive {
    //YOUR CODE HERE
    constructor(type, maxSpace) {
        this.type = type,
        this.maxSpace = maxSpace,
        this.spaceRemaining = maxSpace,
        this.diskDriveFiles = []
    };

    write(fileObj) {
        this.diskDriveFiles.push(fileObj);
        this.spaceRemaining -= fileObj.size;
    }

    wipe() {
        this.diskDriveFiles = [];
        this.spaceRemaining = this.maxSpace;
    }

};