/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Adds two numbers and creates linked list from their sum in reverse order.
 * 
 * @param {ListNode} linkedList1 Input linked list.
 * @param {ListNode} linkedList2 Input linked list.
 * @return {ListNode} New linked list, based on two previous lists.
 */
function addTwoNumbers(
    linkedList1,
    linkedList2
) {
    // Get numbers in correct order from linked lists (reversed)
    const cnt1 = getValue(linkedList1)
    const cnt2 = getValue(linkedList2)

    // Sum them up
    const sum = cnt1 + cnt2

    // Create linked list from sum, for convenience convert it to string
    return createLinkedList(sum.toString(), null)
}

/**
 * Gets reverse numeric representation of linked list.
 * @param {ListNode} linkedList LinkedList Input linked list.
 */
function getValue(linkedList) {

    // Add upp values to an array in reverse order
    let origValues = []
    let currNode = l
    do {
        origValues.unshift(currNode.val)
        currNode = currNode.next
    } while (currNode !== null)

    // Create BigInt from array as values can be quite large
    return BigInt(origValues.join(''))
}

/**
 * Creates linked list from string that contains numbers, recursively.
 * 
 * @param {string} startValue String representation of an integer number.
 * @param {ListNode} prevNode Previous node. It is the last node that contains all previous linked values.
 */
function createLinkedList(
    startValue,
    prevNode
) {

    // End recursive condition
    if (startValue === '') {
        return prevNode
    }

    const firstVal = Number(startValue[0])
    const shortenedStartValue = startValue.substring(1)

    // Recursive call to create multi-node linked list
    return createLinkedList(shortenedStartValue, new ListNode(firstVal, prevNode))
}
