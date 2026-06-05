class DynamicArray {
    _capacity: any
    _arr: any
    _size: any

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this._capacity = capacity

        this._size = 0

        this._arr = new Array(this._capacity).fill(0)

    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this._arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this._arr[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this._size === this._capacity) {
            this.resize()
        }

        this._arr[this._size] = n
        this._size++
    }

    /**
     * @returns {number}
     */
    popback(): number {
        if (this._size > 0) this._size--

        return this._arr[this._size]
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this._capacity *= 2
        
        const newArr = new Array(this._capacity).fill(0)

        for (let i = 0; i < this._size; i++) {
            newArr[i] = this._arr[i]
        }

        this._arr = newArr
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this._size
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this._capacity
    }
}
