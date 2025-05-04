'use client';
import { useState, useCallback } from 'react';

interface HobbiesState {
  buttonsActive: boolean;
  buttonsVisible: boolean;
  hobbiesVisible: boolean;
  changeLetter: string;
}

interface HobbiesAnimation {
  state: HobbiesState;
  handleHobbiesClick: () => Promise<void>;
}

function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function useHobbiesAnimation() {
  const [state, setState] = useState<HobbiesState>({
    buttonsActive: false,
    buttonsVisible: false,
    hobbiesVisible: false,
    changeLetter: 'C'
  });

  const updateState = useCallback((updates: Partial<HobbiesState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const handleHobbiesClick = useCallback(async () => {
    if (state.hobbiesVisible) {
      updateState({ hobbiesVisible: false });
      return;
    }

    const animations = [
      { buttonsVisible: true },
      { buttonsActive: true },
      { changeLetter: 'V', buttonsActive: false },
      { buttonsActive: true },
      { buttonsActive: false, hobbiesVisible: true },
      { buttonsVisible: false, changeLetter: 'C' }
    ];

    for (const animation of animations) {
      updateState(animation);
      await wait(1000);
    }
  }, [state.hobbiesVisible, updateState]);

  return {
    state,
    handleHobbiesClick
  };
}

export default useHobbiesAnimation;