class MemoryVault {
    constructor() {
        this.vault = {};
    }

    // Arrow function to add memory
    addMemory = (key, value) => {
        this.vault[key] = value;
        this.updateMemoryList();
        console.log(`Memory added: ${key} -> ${value}`);
    };

    // Multiline arrow function to update displayed memory list
    updateMemoryList = () => {
        const memoryList = document.getElementById("memoryList");
        memoryList.innerHTML = "";
        Object.keys(this.vault).forEach(key => {
            let li = document.createElement("li");
            li.textContent = `${key}: ${this.vault[key]}`;
            memoryList.appendChild(li);
        });
    };

    // Getter to get memory count
    get memoryCount() {
        return Object.keys(this.vault).length;
    }

    set memoryCount(value) {
        console.log("Memory count cannot be set manually.");
    }

    // Delete operation
    removeMemory = (key) => {
        if (key in this.vault) {
            delete this.vault[key];
            this.updateMemoryList();
            console.log(`Memory deleted: ${key}`);
        } else {
            console.log("Memory not found.");
        }
    };
}

// Create MemoryVault instance
const vault = new MemoryVault();

// Function borrowing with call, apply, and bind
function showMemoryCount() {
    alert(`Total memories: ${this.memoryCount}`);
}

document.getElementById("addMemoryBtn").addEventListener("click", () => {
    let key = document.getElementById("memoryKey").value;
    let value = document.getElementById("memoryValue").value;
    if (key && value) {
        vault.addMemory(key, value);
        document.getElementById("memoryKey").value = "";
        document.getElementById("memoryValue").value = "";
    } else {
        alert("Please enter memory title and details.");
    }
});

document.getElementById("showCountBtn").addEventListener("click", () => {
    showMemoryCount.call(vault);
});

document.getElementById("clearMemoryBtn").addEventListener("click", () => {
    let key = document.getElementById("memoryKey").value;
    if (key) {
        vault.removeMemory(key);
    } else {
        alert("Enter memory title to delete.");
    }
});
