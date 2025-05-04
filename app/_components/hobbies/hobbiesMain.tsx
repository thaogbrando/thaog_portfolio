import { motion } from "framer-motion";
import { fadeIn } from "@/motion";
import { hobbies } from "./allHobbies";
import Hobby from "./hobby";
import { useTranslations } from 'next-intl';

const HobbyMain = () => {
    const t = useTranslations('Hobbies'); 

    return (
        <div id="hobbies">
            <div className="max-w-[1200px] px-8 mx-auto flex flex-col items-center overflow-x-hidden">
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col items-center mx-auto text-center mt-40">
                        <h2 className="text-4xl text-cyan mb-6 text-purple-600">
                            {t('Outside_Coding')} <span className="text-blue-primary dark:text-light-accent">
                                {t("Solo_Coding")}
                            </span>
                        </h2>
                        <p className="text-base mx-auto text-black text-center">
                            {t('Hobby_Desc')}
                        </p>
                    </div>
                </motion.div>
                <div className="pt-10 mx-auto">
                    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-y-4 max-w-[1200px] mx-auto overflow-hidden h-auto pt-6">
                        {hobbies.map((item, index) => {
                            return (
                                <motion.div
                                    variants={fadeIn("up", 0.7)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.2 }}
                                    key={index}
                                >
                                    <Hobby
                                        key={index}
                                        text={t(item.name)}
                                        emoji={item.icon}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HobbyMain;