import React, { Suspense, useEffect } from "react";
import { ScrollView } from "react-native";
import ContentCard from "./content-card";
import CardLoading from "./card-loading";

export default function Slider({
  data,
  translatedData,
  onToggleSnackBar,
}: {
  data: any[];
  translatedData: any;
  onToggleSnackBar: any;
}) {
  useEffect(() => {
    // console.log("Translated Data: ", translatedData);
  }, [translatedData]);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={10}
      style={{ paddingVertical: 10 }}
      contentContainerStyle={{ justifyContent: "center" }}
    >
      <Suspense fallback={< CardLoading />}>
        {data.map((item, i) => {
          const displayData =
            translatedData && translatedData[i] ? translatedData[i] : item;

          // console.log(`Item at index ${i}:`, item, `; Translated:`, displayData);

          return (
            <ContentCard
              onToggleSnackBar={onToggleSnackBar}
              key={i}
              data={item}
              imgSrc={item.thumbnail}
              heading={displayData.title}
              snippet={displayData.snippet}
            />
          );
        })}
      </Suspense>
    </ScrollView>
  );
}
