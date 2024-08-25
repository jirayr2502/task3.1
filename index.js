// 1.գրել ֆունկցիա, որը տրված N թվի համար վերադարձնում է N պատահական սիմվոլներից կազմված տեքստ ներառյալ տառեր, թվեր և սիմվոլներ

function genPas(n) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?/`~';
    let result = '';
    for (let i = 0; i < n; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}


// 2 գրել ֆունկցիա, որը կիրականացնի Binary Search ալգորիթմը, ռեկուրսիվ տարբերակով

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; 
    }

    let middle = left + Math.floor((right - left) / 2);

    if (arr[middle] == target) {
        return middle; 
    } else if (arr[middle] > target) {
        return binarySearch(arr, target, left, middle - 1); 
    } else {
        return binarySearch(arr, target, middle + 1, right);
    }
}