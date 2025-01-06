
#include <vector>
#include <string>
#include <string_view>
using namespace std;


class Solution {

public:
    vector<int> minOperations(const string& boxes) const {
        int numberOfBoxes = boxes.length();
        vector<int> minOperationsToMoveAllBallsToEachBox(numberOfBoxes);

        fillMinOperations(1, numberOfBoxes, minOperationsToMoveAllBallsToEachBox, boxes);
        fillMinOperations(numberOfBoxes - 2, variant_npos, minOperationsToMoveAllBallsToEachBox, boxes);

        return minOperationsToMoveAllBallsToEachBox;
    }

private:
    void fillMinOperations(size_t start, size_t end, span<int> minOperationsToMoveAllBallsToEachBox, string_view boxesArray) const {
        int countEncounteredBalls = 0;
        int accumulatedOperations = 0;
        int step = (end != variant_npos) ? 1 : -1;

        for (size_t i = start; i != end; i += step) {
            countEncounteredBalls += boxesArray[i - step] - '0';
            accumulatedOperations += countEncounteredBalls;
            minOperationsToMoveAllBallsToEachBox[i] += accumulatedOperations;
        }
    }
};
