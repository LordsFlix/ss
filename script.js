let maxZindex = 1;

class Paper {
    
    isHolding = false ;
    prevMouseX = 0;
    prevMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velocityX = 0;
    velocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0;

    init(paper) {
        

        
        paper.addEventListener("mousedown", (e) => {
            this.isHolding = true;
            paper.style.zIndex = maxZindex
            maxZindex += 1

            if(e.button === 0){
                this.prevMouseX = this.mouseX
                this.prevMouseY = this.mouseY
            }
        })
        document.addEventListener("mousemove", (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velocityX = this.mouseX - this.prevMouseX;
            this.velocityY = this.mouseY - this.prevMouseY;

            if(this.isHolding){
                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY;

                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;
            }
        })
        window.addEventListener("mouseup", (e) => {
            this.isHolding = false
        })
    }
}

const papers = Array.from(document.querySelectorAll(".paper"))
papers.forEach(paper => {
    const p = new Paper()
    p.init(paper)
})