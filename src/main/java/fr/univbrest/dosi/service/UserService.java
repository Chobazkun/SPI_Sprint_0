/**
 * 
 */
package fr.univbrest.dosi.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import fr.univbrest.dosi.model.User;

/**
 * @author Chobaz
 *
 *         16 févr. 2017
 */
@Component
public class UserService
{
	private List<User> users;

	public UserService()
	{
		this.users = new ArrayList<User>();

		this.users.add(new User("spiAdmin", "spiAdmin"));
		this.users.add(new User("spiGuest", "spiGuest"));
		this.users.add(new User("spiProf", "spiProf"));
	}

	public User authentifier(final String login, final String pwd)
	{
		for (User u : this.users)
		{
			if (u.getUsername().equals(login) && u.getPassword().equals(pwd))
				return u;
		}
		return null;
	}

}
