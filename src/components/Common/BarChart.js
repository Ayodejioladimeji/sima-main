import React from 'react';
import {
  Canvas,
  Rect, // Import Rect component for rendering bars
  runTiming,
  useComputedValue,
  useValue,
  vec,
} from '@shopify/react-native-skia';
import {scaleLinear, scaleTime} from 'd3';
import {Easing, View, Pressable, Text, StyleSheet} from 'react-native';

const BarChart = ({data}) => {
  const transition = useValue(1);
  const state = useValue({
    current: 0,
    next: 1,
  });

  const GRAPH_HEIGHT = 400;
  const GRAPH_WIDTH = 360;

  const makeGraph = data => {
    const max = Math.max(...data.map(val => val.amount));
    const min = 0; // Assuming a minimum value of 0
    const y = scaleLinear().domain([min, max]).range([GRAPH_HEIGHT, 35]);

    const x = scaleTime()
      .domain([new Date(2000, 1, 1), new Date(2000, 1, 15)])
      .range([10, GRAPH_WIDTH - 10]);

    return data.map(d => {
      const xValue = x(new Date(d.date));
      const yValue = GRAPH_HEIGHT - y(d.amount);
      const height = y(d.amount);
      return {
        x: xValue,
        y: yValue,
        width: 10, // Set the bar width
        height: height,
      };
    });
  };

  const transitionStart = end => {
    state.current = {
      current: end,
      next: state.current.current,
    };
    transition.current = 0;
    runTiming(transition, 1, {
      duration: 750,
      easing: Easing.inOut(Easing.cubic),
    });
  };

  const barData = makeGraph(data);

  return (
    <View style={styles.container}>
      <Canvas
        style={{
          width: GRAPH_WIDTH,
          height: GRAPH_HEIGHT,
        }}>
        {barData.map((bar, index) => (
          <Rect
            key={index}
            x={bar.x - 5} // Adjust for bar width
            y={bar.y}
            width={bar.width}
            height={bar.height}
            fill="#6231ff"
          />
        ))}
      </Canvas>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => transitionStart(0)}
          style={styles.buttonStyle}>
          <Text className="font-openSans" style={styles.textStyle}>
            Graph 1
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonStyle: {
    marginRight: 20,
    backgroundColor: '#6231ff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
});

export default BarChart;
