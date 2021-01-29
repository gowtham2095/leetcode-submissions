/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  	constructor() {
        
    }
    
    /** 
     * @param {Node} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function(root) {
        return JSON.stringify(root);
    };
	
    /** 
     * @param {string} data 
     * @return {Node}
     */
    // Decodes your encoded data to tree.
    deserialize = function(data) {
        return JSON.parse(data);
    };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));