import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

export const ProgressBar = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let animationFrame: number;

        const updateProgress = () => {
            setProgress((oldProgress) => {
                if (oldProgress < 95) {
                    return oldProgress + 1; // 점진적으로 증가
                }
                return oldProgress;
            });
            animationFrame = requestAnimationFrame(updateProgress);
        };

        if (isLoading) {
            setProgress(0);
            setIsVisible(true);
            animationFrame = requestAnimationFrame(updateProgress);
        } else {
            setProgress(100);

            setIsVisible(false);
            setProgress(0);
        }

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [isLoading]);

    return (
        isVisible && (
            <div className="w-full fixed top-0 left-0 z-50">
                <div className="h-1 bg-gray-200 w-full">
                    <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
            </div>
        )
    );
};
