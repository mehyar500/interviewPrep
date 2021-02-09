/**
 * https://leetcode.com/discuss/interview-question/350363/Google-or-OA-2018-or-Max-Distance
 * The distance between 2 binary strings is the sum of their lengths after removing the common prefix. For example: the common prefix of 1011000 and 1011110 is 1011 so the distance is len("000") + len("110") = 3 + 3 = 6.
 * Given a list of binary strings, pick a pair that gives you maximum distance among all possible pair and return that distance.
 */

/*
 * Build a tire tree.
 * The node value is the max suffix length of each prefix.
 * The left node means '0', and the right node means '1'.
 * The isEnd means whether a node is the last char of the string.
 * Traversing the tree and update the max distance.
 * For each node, the max distance is the sum of two children.
 * If there is only one child and the node is the end of one string, then the maxdistance is the value of the child.
 */
