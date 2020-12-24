declare function findAllAgariPatterns(haiArr: findAllAgariPatterns.HaiArr): (string | string[])[][];

declare namespace findAllAgariPatterns {

    type Hai = 0 | 1 | 2 | 3 | 4;
    type HaiArr = [
        [Hai, Hai, Hai, Hai, Hai, Hai, Hai, Hai, Hai],
        [Hai, Hai, Hai, Hai, Hai, Hai, Hai, Hai, Hai],
        [Hai, Hai, Hai, Hai, Hai, Hai, Hai, Hai, Hai],
        [Hai, Hai, Hai, Hai, Hai, Hai, Hai],
    ];

    function check(haiArr: HaiArr): boolean;
    function check7(haiArr: HaiArr): boolean;
    function check13(haiArr: HaiArr): boolean;
    function checkAll(haiArr: HaiArr): boolean;
}

export = findAllAgariPatterns;
