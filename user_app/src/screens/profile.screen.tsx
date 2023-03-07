import React, { FC } from "react"
import {Button, Layout, TopNavigation} from "@ui-kitten/components"
import { DrawerAction } from "components/drawer"
import { ProfileScreenProps } from "types/navigation/types"
import {useAppDispatch} from "hooks";
import {logout} from "actions";

const ProfileScreen: FC<ProfileScreenProps> = ({
    navigation: { toggleDrawer },
    route,
}) => {
  const dispatch = useAppDispatch()
    return (
        <Layout>
            <TopNavigation
                accessoryLeft={<DrawerAction toggleDrawer={toggleDrawer} />}
                title={route.name}
            />

          <Button onPress={() => dispatch(logout())}>Logout</Button>
        </Layout>
    )
}

export default ProfileScreen
