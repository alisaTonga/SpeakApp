package Repository;

import Entity.User;

import java.util.List;

public interface UserRepositoryInterface {
    List<User> allUsers();
    User findUserById(int id);
    User findUserByEmail(String email);
    User findUserByUsername(String username);
    void addUser(User user);
    void updateUser(User user);
    void deleteUser(int id);

}
