import { create } from "zustand";
import { combine } from "zustand/middleware";

const useGameStore = create(
    combine({
        squares: Array(9).fill(null),xIsNext: true}, 
        (set) => { return {
                setSquares: (nextSquares: any) => {
                    set((state) => ({
                        squares: 
                        typeof nextSquares === 'function' 
                        ? nextSquares(state.squares) : nextSquares
                    }))
                },
                setXIsNext: (nextXIsNext: any) => {
                    set((state) => ({
                      xIsNext:
                        typeof nextXIsNext === 'function'
                          ? nextXIsNext(state.xIsNext)
                          : nextXIsNext,
                    }))
                  },
            }
        })
);

export default useGameStore;