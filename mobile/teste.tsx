
  // const [fontsLoaded] = useFonts({
  //   Inter_400Regular,
  //   Inter_500Medium
  // });

  // if(!fontsLoaded) {
  //   return 
  // }



  // ////////

  // const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       await SplashScreen.preventAutoHideAsync();
  //       await Font.loadAsync({
  //         Inter_400Regular,
  //         Inter_500Medium
  //       });
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //     }
  //   }
  //   prepare();
  // },[])

  // const onLayoutRootView = useCallback( async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // },[appIsReady]);

  // if(!appIsReady) {
  //   return null;
  // }