import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

// Inline CSS styles
const styles = {
    roadmapSection: {
        padding: '80px 0',
        backgroundColor: '#0a1924',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
    },
    title: {
        fontSize: '3rem',
        color: '#8ab4f8',
        marginBottom: '40px',
    },
    phasesContainer: {
        position: 'relative' as const,
        width: '100%',
    },
    phase: {
        backgroundColor: '#212121',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        marginBottom: '40px',
        maxWidth: '600px',
        zIndex: 1,
    },
    phaseTitle: {
        fontSize: '2rem',
        color: '#8ab4f8',
        marginBottom: '20px',
        // textShadow: '0 0 8px #8ab4f8',
    },
    phaseList: {
        listStyleType: 'none',
        padding: 0,
        textAlign: 'left' as const,
    },
    phaseListItem: {
        marginBottom: '10px',
        // textShadow: '0 0 8px #8ab4f8',
    },
    phaseListBullet: {
        width: '10px',
        height: '10px',
        backgroundColor: '#8ab4f8',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: '10px',
    },
    leftAligned: {
        marginLeft: '0',
    },
    rightAligned: {
        marginLeft: 'auto',
    },
    connectingLine: {
        width: '2px',
        height: '100%',
        backgroundColor: '#8ab4f8',
        position: 'absolute' as const,
        left: '50%',
        top: 0,
    },
    circle: {
        width: '25px',
        height: '25px',
        backgroundColor: '#8ab4f8',
        borderRadius: '50%',
        position: 'absolute' as const,
        left: 'calc(50% - 12.5px)',
        zIndex: 2,
    }
};

// Phase component
const Phase: React.FC<{ title: string; tasks: string[]; isRightAligned?: boolean }> = ({ title, tasks, isRightAligned }) => (
    <div style={{ ...styles.phase, ...(isRightAligned ? styles.rightAligned : styles.leftAligned) }}>
        <h3 style={styles.phaseTitle}>{title}</h3>
        <ul style={styles.phaseList}>
            {tasks.map((task, index) => (
                <li key={index} style={styles.phaseListItem}>
                    <span style={styles.phaseListBullet}></span>
                    {task}
                </li>
            ))}
        </ul>
    </div>
);

const RoadmapSection: React.FC = () => {
  // Refs and animations for each phase
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.3 });

  const slideInLeft1 = useSpring({ opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateX(0)' : 'translateX(-50px)', delay: 100 });
  const slideInRight2 = useSpring({ opacity: inView2 ? 1 : 0, transform: inView2 ? 'translateX(0)' : 'translateX(50px)', delay: 200 });
  const slideInLeft3 = useSpring({ opacity: inView3 ? 1 : 0, transform: inView3 ? 'translateX(0)' : 'translateX(-50px)', delay: 300 });
  const slideInRight4 = useSpring({ opacity: inView4 ? 1 : 0, transform: inView4 ? 'translateX(0)' : 'translateX(50px)', delay: 400 });
  const slideInLeft5 = useSpring({ opacity: inView5 ? 1 : 0, transform: inView5 ? 'translateX(0)' : 'translateX(-50px)', delay: 500 });

  return (
    <section id="roadmap" style={styles.roadmapSection}>
      <h2 style={styles.title}>Roadmap</h2>
      <div style={styles.phasesContainer}>
        <div style={styles.connectingLine}></div>
        <animated.div style={slideInLeft1} ref={ref1}>
          <Phase
            title="Phase 1"
            tasks={[
              'Website development',
              'Whitepaper creation',
              'Solchat message system setup',
              'Social media verification',
              'Prelaunch marketing activities',
              'Community building efforts',
            ]}
          />
        </animated.div>
        <animated.div style={slideInRight2} ref={ref2}>
          <Phase
            title="Phase 2"
            tasks={[
              'Presale launch on Solrocket',
              'Official launch on Raydium',
              'Strategic marketing campaigns',
              'Implementation of Solchat texting and image features',
              'Listing on CoinMarketCap (CMC) and CoinGecko (CG)',
              'Setting up Solchat LP pools (Meteora)',
            ]}
            isRightAligned
          />
        </animated.div>
        <animated.div style={slideInLeft3} ref={ref3}>
          <Phase
            title="Phase 3"
            tasks={[
              'Expansion of the community',
              'Global marketing initiatives',
              'Introduction of Solchat audio and video calling',
              'Integration with SOL ecosystem',
              'New UI design implementation',
              'Release of Solchat v2',
              'Establishing Dapp partnerships',
              'Addition of extra features to Solchat',
            ]}
          />
        </animated.div>
        <animated.div style={slideInRight4} ref={ref4}>
          <Phase
            title="Phase 4"
            tasks={[
              'Launching Solchat App on Solana Mobile DApp Store',
              'Introduction of in-app rewards for Solchat users',
              'Marketing efforts including Solchat ads',
              'Incorporation of additional features into Solchat',
            ]}
            isRightAligned
          />
        </animated.div>
        <animated.div style={slideInLeft5} ref={ref5}>
          <Phase
            title="Phase 5"
            tasks={[
              'Listing on centralized exchanges (CEX)',
              'Implementation of group chat feature in Solchat',
              'Introduction of Solchat streaming functionality',
              'Forming partnerships with other entities',
              'Launching staking for rewards within Solchat',
              'Incorporating additional features into Solchat',
            ]}
          />
        </animated.div>
      </div>
    </section>
  );
};

export default RoadmapSection;