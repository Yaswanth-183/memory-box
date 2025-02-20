const memoryBox = {
    memories: {},

    addMemory: function(key, value) {
        this.memories[key] = value;
        updateMemoryList();
    },

    removeMemory: function(key) {
        delete this.memories[key];
        updateMemoryList();
    },

    get memoryCount() {
        return Object.keys(this.memories).length;
    },

    set memoryCount(value) {
        console.log('Memory count cannot be changed directly.');
    }
};

function updateMemoryList() {
    const memoryList = document.getElementById("memoryList");
    memoryList.innerHTML = "";
    Object.keys(memoryBox.memories).forEach((key) => {
        let li = document.createElement("li");
        li.textContent = `${key}: ${memoryBox.memories[key]}`;
        memoryList.appendChild(li);
    });
}

const addMemory = () => {
    const key = document.getElementById("memoryKey").value;
    const value = document.getElementById("memoryValue").value;

    if (key && value) {
        memoryBox.addMemory(key, value);
        document.getElementById("memoryKey").value = "";
        document.getElementById("memoryValue").value = "";
    } else {
        alert("Please enter memory title and details.");
    }
};

function showMemoryCount() {
    alert(`Total memories: ${memoryBox.memoryCount}`);
}

function callExample() {
    showMemoryCount.call(memoryBox);
}

function applyExample() {
    showMemoryCount.apply(memoryBox);
}

function bindExample() {
    const boundShowMemoryCount = showMemoryCount.bind(memoryBox);
    boundShowMemoryCount();
}

function removeMemory() {
    const key = document.getElementById("memoryKey").value;
    if (key) {
        memoryBox.removeMemory(key);
    } else {
        alert("Please enter a memory title to delete.");
    }
}
