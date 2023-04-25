import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'timing-diagram';

    rows = [
        {
            blocks: this.generateInitialBlocks()
        }
    ]

    appendRow() {
        const initialBlocks = this.generateInitialBlocks()
        const additionalBlocksCount = this.rows[0].blocks.length - initialBlocks.length
        this.appendAdditionalBlocks(initialBlocks, additionalBlocksCount)
        this.rows.push({ blocks: initialBlocks })
    }

    appendColumns(n: number) {
        for (let i = 0; i < this.rows.length; i++) {
            this.appendAdditionalBlocks(this.rows[i].blocks, n)
        }
    }

    generateInitialBlocks() {
        const blocks = []
        for (let i = 0; i < 10; i++) {
            blocks.push(this.generateBlock())
        }
        return blocks
    }

    generateBlock() {
        return { isHigh: false }
    }

    appendAdditionalBlocks(blocks: any, n: number) {
        for (let j = 0; j < n; j++) {
            blocks.push({ isHigh: false })
        }
    }

    deleteLastColumn() {
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].blocks.pop()
        }
    }

    prependColumn() {
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].blocks.unshift(this.generateBlock())
        }
    }
}
