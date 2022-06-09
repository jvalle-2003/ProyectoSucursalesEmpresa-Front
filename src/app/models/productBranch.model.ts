export class ProductBranchModel{
    constructor(
        public id: string,
        public product: string,
        public stock: number,
        public enterpriceBranch: string,
    ) { }
}