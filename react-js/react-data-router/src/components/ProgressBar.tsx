import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

export const ProgressBar = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        let animationFrame: number;
        let timeoutId: ReturnType<typeof setTimeout>;
        let innerTimeoutId: ReturnType<typeof setTimeout>;

        const updateProgress = () => {
            setProgress((oldProgress) => {
                if (oldProgress < 50) return oldProgress + 5;
                return oldProgress;
            });
            animationFrame = requestAnimationFrame(updateProgress);
        };

        if (isLoading) {
            setProgress(0);
            setIsVisible(true);
            animationFrame = requestAnimationFrame(updateProgress);
        } else {
            setProgress(50);

            timeoutId = setTimeout(() => {
                setProgress(100);
                animationFrame = requestAnimationFrame(updateProgress);

                innerTimeoutId = setTimeout(() => {
                    setProgress(0);
                    setIsVisible(false);
                }, 300)
            }, 100);
        }

        return () => {
            cancelAnimationFrame(animationFrame);
            clearTimeout(timeoutId);
            clearTimeout(innerTimeoutId);
        };
    }, [isLoading]);

    return (
        isVisible && (
            <div className="w-full fixed top-0 left-0 z-50 transition-opacity duration-300">
                <div className="h-[4px] bg-gray-200 w-full">
                    <div
                        className="h-full rounded-full bg-blue-500 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        )
    );
};
