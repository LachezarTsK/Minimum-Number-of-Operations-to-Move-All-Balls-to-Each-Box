
using System;

public class Solution
{
    public int[] MinOperations(string boxes)
    {
        int numberOfBoxes = boxes.Length;
        char[] boxesArray = boxes.ToCharArray();
        int[] minOperationsToMoveAllBallsToEachBox = new int[numberOfBoxes];

        FillMinOperations(1, numberOfBoxes, minOperationsToMoveAllBallsToEachBox, boxesArray);
        FillMinOperations(numberOfBoxes - 2, -1, minOperationsToMoveAllBallsToEachBox, boxesArray);

        return minOperationsToMoveAllBallsToEachBox;
    }

    private void FillMinOperations(int start, int end, int[] minOperationsToMoveAllBallsToEachBox, char[] boxesArray)
    {
        int countEncounteredBalls = 0;
        int accumulatedOperations = 0;
        int step = (end != -1) ? 1 : -1;

        for (int i = start; i != end; i += step)
        {
            countEncounteredBalls += boxesArray[i - step] - '0';
            accumulatedOperations += countEncounteredBalls;
            minOperationsToMoveAllBallsToEachBox[i] += accumulatedOperations;
        }
    }
}
