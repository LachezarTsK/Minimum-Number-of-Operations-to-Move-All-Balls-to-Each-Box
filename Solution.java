
public class Solution {

    public int[] minOperations(String boxes) {
        int numberOfBoxes = boxes.length();
        char[] boxesArray = boxes.toCharArray();
        int[] minOperationsToMoveAllBallsToEachBox = new int[numberOfBoxes];

        fillMinOperations(1, numberOfBoxes, minOperationsToMoveAllBallsToEachBox, boxesArray);
        fillMinOperations(numberOfBoxes - 2, -1, minOperationsToMoveAllBallsToEachBox, boxesArray);

        return minOperationsToMoveAllBallsToEachBox;
    }

    private void fillMinOperations(int start, int end, int[] minOperationsToMoveAllBallsToEachBox, char[] boxesArray) {
        int countEncounteredBalls = 0;
        int accumulatedOperations = 0;
        int step = (end != -1) ? 1 : -1;

        for (int i = start; i != end; i += step) {
            countEncounteredBalls += boxesArray[i - step] - '0';
            accumulatedOperations += countEncounteredBalls;
            minOperationsToMoveAllBallsToEachBox[i] += accumulatedOperations;
        }
    }
}
